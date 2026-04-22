import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/app/utils/paths'

const Logo = () => {
  return (
    <Link href='/'>
      <div className="text-2xl font-bold text-primary dark:text-white">
        Nedit Xhaferi
      </div>
    </Link>
  )
}

export default Logo
