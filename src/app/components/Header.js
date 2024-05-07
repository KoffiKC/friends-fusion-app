import Link from 'next/link'
import LoupeIcon from '@mui/icons-material/Loupe';
import logo from '../../../public/Logo.png'
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className='header'>

    <Image src={logo}
    width={70}
    />

  </div>
  )
}