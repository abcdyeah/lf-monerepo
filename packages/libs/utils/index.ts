export const formatCharToOmit = (
    input: string,
    props: {
      p: number
      l: number
    } = {
      p: 4,
      l: 4,
    },
  ): string => {
    if (input?.length <= 8) return input
    const pre = input.slice(0, props.p)
    const sux = input.slice(-props.l)
    const s = pre + '....' + sux
    return s
  }
  