const Average = ({average}:{average: number|undefined}) => {
  return (
    <h2 className='average'>
      Promedio de edades:
      {Math.floor(average||0)}
    </h2>
  )
}

export default Average
