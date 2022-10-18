import React from "react";

export default function CardVideo(props) {

  return (
    <div>
      <div className="box-pagina-principal">
        <img src="https://picsum.photos/400/400?a=1 " alt="" />
        <div className="AvatarContainer">
            <img src={props.img}/>
            <h4>{props.nome}
            </h4>
        </div>
      </div>
    </div>
  );
}
