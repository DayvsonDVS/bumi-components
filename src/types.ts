interface TableRowPosition {
  uid: number | string
  position: number
}

interface NotificationsProp {
  title: string
  text?: string
  color?: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'center'
  duration?: number
  speed?: string
  ignoreDuplicates?: boolean
  closeOnClick?: boolean
}
export type NotificationsProps = NotificationsProp
export type TableRowPositions = TableRowPosition[]
