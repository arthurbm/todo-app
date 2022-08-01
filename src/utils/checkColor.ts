export function checkColor(color: string, theme: any) {
  if (color === 'blue') return theme.colors.blue2
  else if (color === 'purple') return theme.colors.purple
  else if (color === 'white') return theme.colors.whiteText
  else if (color === 'backgroundGray') return theme.colors.quintenary
  else return theme.colors.primary
}
