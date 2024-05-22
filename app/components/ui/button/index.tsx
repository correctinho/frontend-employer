import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?:boolean,
    children: ReactNode
}
export function Button({ loading, children, ...rest}:ButtonProps){
    return(
        <button 
        className={styles.button}
        disabled={loading}
        {...rest}
        > 
            {loading ?(
                <FaSpinner color="#fff" size={16} className={styles.svg}/>
            ) : (<a className={styles.buttonText}>
            {children}
                </a>)
        }
            
        </button>
    )
}

export function SubmitButton({ loading, children, ...rest}:ButtonProps){
    return(
        <button 
        className={styles.submitButton}
        disabled={loading}
        {...rest}
        > 
            {loading ?(
                <FaSpinner color="#fff" size={16} />
            ) : (<a className={styles.buttonText}>
            {children}
                </a>)
        }
            
        </button>
    )
}