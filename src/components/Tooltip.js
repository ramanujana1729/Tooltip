const Tooltip = ({position}) => {
let classes = 'tooltiptext ' + position; 
  return (
        <span className={classes}>Tooltip
       Position - {position}</span>
  )
}

export default Tooltip