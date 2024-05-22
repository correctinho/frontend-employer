import Search from "@/app/components/search/search";
import { getEmployees } from "@/app/lib/actions";
import styles from './employees.module.css'
import Link from "next/link";
import Pagination from "@/app/components/pagination/pagination";
import { Tooltip, Button } from "@nextui-org/react";
import { TbAlertSquareRoundedFilled } from "react-icons/tb";


export type Employees = {
    uuid: string
    business_info_uuid: string | null
    address_uuid: string | null
    document: string
    document2: string | null
    document3: string | null
    full_name: string
    display_name: string | null
    internal_company_code: string | null
    gender: string | null
    email: string | null
    date_of_birth: string
    phone: string | null
    salary: number | null
    company_owner: boolean
    status: string
    function: string | null
    recommendation_code: string | null
    marital_status: string | null
    dependents_quantity: number
    created_at: string | null
    updated_at: string | null
    BusinessInfo: {
        fantasy_name: string
    } | null
    user_document_validation_uuid: string | null
    Address?: {
        uuid: string
        line1: string
        line2: string
        line3: string | null
        postal_code: string
        neighborhood: string
        city: string
        state: string
        country: string
    } | null
    UserValidation?: {
        uuid: string
        document_front_status: string
        document_back_status: string
        selfie_status: string
        document_selfie_status: string
        created_at: string | null
        updated_at: string | null


    } | null


}

export default async function EcommerceSettings({ searchParams }: any) {

    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;

    const { count, employees } = await getEmployees(q, page)


    return (
        <main>
            <div className={styles.top}>
                <Search placeholder="Pesquisar por nome" />
                <Link href="/dashboard/ecommerce/products/add">
                    <button className={styles.addButton}>Adicionar novo</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Código Interno</td>
                        <td>Nome</td>
                        <td>Cargo</td>
                        <td>Salário</td>
                        <td>Ações</td>

                    </tr>
                </thead>
                <tbody>

                    {employees.map((employee: Employees) => (

                        <tr key={employee.uuid}>
                            <td>{employee.internal_company_code ? employee.internal_company_code : "N/A"}</td>
                            <td>
                                {employee.full_name}
                                {employee.status !== 'active' && (

                                    <Tooltip content="Colaborador ainda não Registrado no App" showArrow={true} color='warning' placement='right-start'>
                                        <Button variant='faded' className={styles.toolTipButton}>
                                            <TbAlertSquareRoundedFilled className={styles.alert} />

                                        </Button>

                                    </Tooltip>
                                )}
                            </td>
                            <td>{employee.function ? employee.function : "Vazio"}</td>
                            <td>R$ {employee.salary}</td>

                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/colaboradores/lista/${employee.uuid}`}>
                                        <button className={`${styles.button} ${styles.view}`}>
                                            Ver mais
                                        </button>
                                    </Link>

                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </main>
    )
}