import PropTypes from 'prop-types'

export const GifItem = ({title, url, id, imgYes=true}) => {
console.log(url)
  return (
    <div className="card">
        { imgYes && <img src={url} alt="" />  }
         <a href={url} target="_blank">{ title.trim() === '' ? 'Sense titol' : title }</a>
    </div>
  )
}

GifItem.prototype = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}

GifItem.defaultProps = {
  title: 'Sense titol',
  

}


// <a href={url} target="_blank">{ title.trim() === '' ? 'Sense titol' : title }</a>