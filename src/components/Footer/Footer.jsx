
import './footer.css'
const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container">
                <div className='footer__inner'>
                    <p className='footer__text'>Уже есть аккаунт ? </p>
                    <a href='#!' className='footer__text-link' target='_blank'>
                        Войти
                        <svg className='footer__img' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H13" stroke="#4B72C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 1.75L13 7L7.75 12.25" stroke="#4B72C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}


export default Footer
