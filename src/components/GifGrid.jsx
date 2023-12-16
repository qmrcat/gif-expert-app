import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
//import { getGifs } from "../helpers/getGifts";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoadingMessage } from "./LoadingMessage";

export const GifGrid = ({ categoria }) => {

	const { images, isLoading } = useFetchGifs(categoria);

	return (
		<>
			<h3>{categoria}</h3>

      <LoadingMessage ok={isLoading} msg="Cargant imatges espereu ... " />

      {/* {
        isLoading && ( <h2>Cargant imatges espereu ... </h2> )
      } */}

			<div className="card-grid">
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
