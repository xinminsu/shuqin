import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">试验管理</Link>
      <Link href="/experimentalList">试验列表</Link>
      <Link href="/manufacturerInformation">厂家信息</Link>
      <Link href="/steelInformation">钢材信息</Link>
    </nav>
  )
}
