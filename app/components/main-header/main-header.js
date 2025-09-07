import logo from '@/assets/logo.png'
import Image from 'next/image'
import NavLink from './nav-link'
import Link from 'next/link'
import classes from './main-header.module.css'
import MainHeaderBackground from './main-header-background'
export default function MainHeader()
{
    return(
        <>
       
       <MainHeaderBackground/>
        <header className={classes.header}>
             
            <Link href='/' className={classes.logo}>

            <Image src={logo} alt="some food"   priority/>
            Next Level Food

            </Link>

             <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href='/meals'>Meals Page</NavLink>
                </li>

                 <li>
                    <NavLink href='/community'>Community Page</NavLink>
                </li>
                
            </ul>

        </nav>

        </header>

       
        </>
    )


}