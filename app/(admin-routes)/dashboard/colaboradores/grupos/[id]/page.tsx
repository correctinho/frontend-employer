

import styles from "./singleProduct.module.css"
import group from '../../../../../groups.json'

const SingleProductPage = async ({ params }: {params: {
  id: string
}}) => {
  const { id } = params;
 
  //ajustar aqui para buscar detalhes do produto
  const product = group.find((item) => item.id === id)

  

    async function updateProduct() {
      'use server'
      console.log('clicou em atualizar produto')
    }

return (
  <div className={styles.container}>
    <div className={styles.infoContainer}>
      {/* <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill />
      </div> */}
      {product?.title}
    </div>
    <div className={styles.formContainer}>
      <form action={updateProduct} className={styles.form}>
        <input type="hidden" name="id" value={product?.id} />
        <label>Título</label>
        <input type="text" name="title" placeholder={product?.title} />
        <label>Preço</label>
        <input type="number" name="price" placeholder={product?.price.toString()} />
        <label>Categoria</label>
        <select name="cat" id="cat">
          <option value="kitchen">Kitchen</option>
          <option value="computers">Computers</option>
        </select>
        <label>Descrição</label>
        <textarea
          name="desc"
          id="desc"
          rows={10}
          placeholder={product?.description}
        ></textarea>
        <button>Atualizar</button>
      </form>
    </div>
  </div>
);
};

export default SingleProductPage;