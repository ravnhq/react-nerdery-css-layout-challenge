import styles from './table.module.css'
import { SingleSquare } from '../../Icons/Icons'
import { colors } from '../../constants'

export const Table = () => {
  return (
    <table className={styles['table-custom']}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Members</th>
        <th>Last Modified</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><SingleSquare color={colors.ORANGE} rounded={true}></SingleSquare> Travel Landing Page</td>
        <td>5 members</td>
        <td>Mar 8, 2020</td>
        <td>...</td>
      </tr>
      <tr>
        <td><SingleSquare color={colors.GREEN} rounded={true}></SingleSquare> True Photos</td>
        <td>12 members</td>
        <td>Mar 10,2023</td>
        <td>...</td>
      </tr>
      <tr>
        <td><SingleSquare color={colors.RED} rounded={true}></SingleSquare> Dashboard Structure</td>
        <td>12 members</td>
        <td>Mar 10,2023</td>
        <td>...</td>
      </tr>
      <tr>
        <td><SingleSquare color={colors.NAVYBLUE} rounded={true}></SingleSquare> Character Illustration</td>
        <td>3 members</td>
        <td>Mar 10,2023</td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
  )
}
