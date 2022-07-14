
const Container = ({children, myValue}) => {
  return (
    <>
        <h2>Container - Children</h2>
        {children}
        <p>este é o valor da props myValue:  {myValue}</p>
    </>
  )
}

export default Container