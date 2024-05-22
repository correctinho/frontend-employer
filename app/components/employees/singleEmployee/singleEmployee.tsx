'use client'
import { EmployeeTypes } from '@/app/utils/types/employee.types'
import styles from './singleEmploye.module.css'
import { TbAlertSquareRoundedFilled } from "react-icons/tb";
import { Tooltip, Button } from "@nextui-org/react";

type SingleEmployeeProps = {
    data: EmployeeTypes,
    status: number
}
export default function SingleEmployee({ data, status }: SingleEmployeeProps) {

    return (
        <section className={styles.section}>
            {status === 200 ?
                <>
                    <div className={styles.top}>
                        <h1>{data.full_name}</h1>
                        <Tooltip content="Colaborador ainda não Registrado no App" showArrow={true} color='warning' placement='right-start'>
                            <Button variant='faded' className={styles.toolTipButton}>
                                <TbAlertSquareRoundedFilled className={styles.alert} />

                            </Button>

                        </Tooltip>

                    </div>
                    <div className={styles.userDetails}>
                        <h2>Informações Gerais</h2>
                        <div>

                            <div className={styles.field}>
                                <label htmlFor="">Código Interno</label>
                                <input type="text" disabled value={data.internal_company_code ? data.internal_company_code : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">CPF</label>
                                <input type="text" disabled value={data.document} />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="">RG</label>
                                <input type="text" disabled value={data.document2 ? data.document2 : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">CNH</label>
                                <input type="text" disabled value={data.document3 ? data.document3 : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Email</label>
                                <input type="text" disabled value={data.email ? data.email : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Data Nascimento</label>
                                <input type="text" disabled value={data.date_of_birth ? data.date_of_birth : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Salário</label>
                                <input type="text" disabled value={data.salary ? data.salary : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Cargo</label>
                                <input type="text" disabled value={data.function ? data.function : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Estado Civil</label>
                                <input type="text" disabled value={data.marital_status ? data.marital_status : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">total de dependentes</label>
                                <input type="text" disabled value={data.dependents_quantity ? data.dependents_quantity : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Registrado em:</label>
                                <input type="text" disabled value={data.created_at ? data.created_at : ''} />
                            </div>

                        </div>
                    </div>

                    <div className={styles.address}>
                        <h2>Endereço</h2>
                        <div>

                            <div className={styles.field}>
                                <label htmlFor="">Rua</label>
                                <input type="text" disabled value={data.Address?.line1 ? data.Address?.line1 : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Número</label>
                                <input type="text" disabled value={data.Address?.line2 ? data.Address?.line2 : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Complemento</label>
                                <input type="text" disabled value={data.Address?.line3 ? data.Address?.line3 : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">CEP</label>
                                <input type="text" disabled value={data.Address?.postal_code ? data.Address?.postal_code : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Bairro</label>
                                <input type="text" disabled value={data.Address?.neighborhood ? data.Address?.neighborhood : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Cidade</label>
                                <input type="text" disabled value={data.Address?.city ? data.Address?.city : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">Estado</label>
                                <input type="text" disabled value={data.Address?.state ? data.Address?.state : ''} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="">País</label>
                                <input type="text" disabled value={data.Address?.country ? data.Address?.country : ''} />
                            </div>
                        </div>
                    </div>
                </>
                : 
                <p>Não foi possível buscar os dados</p>}

        </section>
    )
}