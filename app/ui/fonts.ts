import { Inter, Lusitana, Montserrat } from 'next/font/google'

export const montserrat = Montserrat({ subsets: ['latin'] })

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const inter = Inter({ subsets: ['latin'] });