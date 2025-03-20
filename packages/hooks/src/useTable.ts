import { useState, useCallback } from 'react'

/**
 * @name useTable
 */
const useTable = () => {
  /**
   * @name sort
   * @msg change sort val
   */
  const [sort, setSort] = useState<{
    name?: string
    direction: 'desc' | 'asc'
  }>({
    name: '',
    direction: 'desc',
  })

  /**
   * @name onEventSort
   * @msg onEventSort Function
   */
  const onEventSort = useCallback(
    (parameter: { name?: string; direction: 'desc' | 'asc' }) => {
      setSort(parameter)
    },
    [],
  )

  return {
    sort,
    onEventSort,
  }
}

export default useTable
