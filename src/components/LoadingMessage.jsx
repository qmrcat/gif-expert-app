
export const LoadingMessage = ({ok, msg}) => {


  if(!ok) return;

  return (
        <>
            <h2> { msg } </h2>
        </>
  )
}
