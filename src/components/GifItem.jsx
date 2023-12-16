
export const GifItem = ({title, url, id}) => {
  return (
    <div className="card">
        <img src={url} alt="" />
         <p>{ title.trim() === '' ? 'Sense titol' : title }</p>
    </div>
  )
}