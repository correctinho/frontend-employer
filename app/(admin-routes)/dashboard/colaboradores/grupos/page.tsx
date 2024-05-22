
import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css"
import Search from '../../../../components/search/search'
import Pagination from "@/app/components/pagination/pagination";
import MobilePreviewPage from "@/app/components/mobileScreen/mobileScreen";
import groups from '../../../../groups.json'
import { group } from "console";

export type ProductsProps = {
  id: string
  img: string
  title: string
  description: string
  price: number
  stock: number
  createdAt: Date
}

const ProductsPage = async ({ searchParams }: any) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  // const { count, products } = await fetchProducts(q, page);

  // const count = 5
  const data: ProductsProps[] = [

    {
      id: '1',
      img: 'https://images.pexels.com/photos/6690916/pexels-photo-6690916.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Grupo 1",
      description: "Gerentes",
      price: 50000 / 100,
      stock: 45,
      createdAt: new Date()
    },
    // Novos produtos
    {
      id: '2',
      img: 'https://images.pexels.com/photos/18463824/pexels-photo-18463824/free-photo-of-fotografia-animal-fotografia-de-animais-passaro-ave.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: "Grupo 2", 
      description: "Operadores de caixa",
      price: 30000 / 100,
      stock: 30,
      createdAt: new Date('2022-03-01')
    },
    {
      id: '3',
      img: 'https://images.pexels.com/photos/16061696/pexels-photo-16061696/free-photo-of-outono-declinio-nublado-campo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: "Grupo 3",
      description: "Equipe de TI",
      price: 35000 / 100,
      stock: 20,
      createdAt: new Date('2022-02-15')
    },
    {
      id: '4',
      img: 'https://images.pexels.com/photos/17088715/pexels-photo-17088715/free-photo-of-abandonado-perdido-arquitetura-arte.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: "Grupo 4",
      description: "Cozinha",
      price: 46823 / 100,
      stock: 50,
      createdAt: new Date('2022-01-20')
    },
    {
      id: '5',
      img: 'https://images.pexels.com/photos/10964535/pexels-photo-10964535.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: "Grupo 5",
      description: "Faxineiros",
      price: 25698 / 100,
      stock: 40,
      createdAt: new Date('2022-04-10')
    },
    {
      id: '6',
      img: 'https://images.pexels.com/photos/10155090/pexels-photo-10155090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: "Grupo 6",
      description: "CEO",
      price: 87456 / 100,
      stock: 25,
      createdAt: new Date('2022-03-25')
    },
   
    // Adicione mais produtos conforme necessário...
  ];

  async function fetchGroup(q: string, page: any) {
    
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    //fazer a busca da api para pegar os produtos
    //irá retornar uma lista de produtos

    const groupList = groups
      .filter((product: any) => regex.test(product.title))
      .slice(ITEM_PER_PAGE * (page - 1), ITEM_PER_PAGE * page);

      return { count: groups.length, groupList }
  }

  const { count, groupList } = await fetchGroup(q, page)

  async function deleteProduct() {
    'use server'
    console.log("deletou grupo")
  }
  return (
    <div className={styles.container}>
      
      <div className={styles.top}>
        <Search placeholder="Pesquisar grupo" />
        <Link href="/dashboard/ecommerce/products/add">
          <button className={styles.addButton}>Adicionar novo</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nome do Grupo</td>
            <td className={styles.description}>Descrição</td>
            <td>Valor por usuário</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {groupList.map((group) => (
            <tr key={group.id}>
              <td>
                <div className={styles.group}>
                  <Image
                    src={group.img || "/nogroup.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.groupImage}
                  />
                  {group.title}
                </div>
              </td>
              <td className={styles.description}>{group.description}</td>
              <td>R$ {group.price.toFixed(2)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/ecommerce/grupos/${group.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Visualizar
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={group.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Deletar
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;