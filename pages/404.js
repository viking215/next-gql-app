import Link from 'next/link'
import s from '../styles/error.module.scss'

const ErrorPage = () => {
    return (
        <>
            <h1 className={s.error}>404 Not Found</h1>
            <p>Please<Link href={'/'}> go to safety</Link></p>
        </>

    )
}

export default ErrorPage