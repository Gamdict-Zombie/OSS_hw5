import React from "react";

const ShowIndex = ({ services, onDelete, onEdit }) => {
  if (!services || services.length === 0) {
    return <h1>No Services Found</h1>;
  }

  return (
    <div className="mainlistwrap">
      {services.map((service) => (
        <div key={service.id} className="mainunitwrap">
          <div className="mainunita">
            <div className="unitimgwrap">
              <img
                loading="lazy"
                src={service.image}
                className="unitimgcss"
                alt={service.title}
              />
            </div>
            <div className="unitinfowrap">
              <h3 className="unittitle">{service.title}</h3>
              <div className="subtitle"></div>
              <div className="horoscope">
                <span role="img" rotate="0" className="starwrap">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    className="css-7kp13n e181xm9y0"
                  >
                    <path d="M8.37094152,8.12482574 L2.52598096,8.59636398 L2.36821881,8.6135218 C0.881583763,8.81867772 0.513822851,10.1467426 1.72605142,11.1443161 L6.11068071,14.7526934 L4.80553251,20.0682859 L4.77348322,20.2161997 C4.50052597,21.673724 5.6402616,22.4726949 6.9887771,21.699537 L12.00271,18.8250573 L17.0166429,21.699537 L17.1506515,21.7715841 C18.4829447,22.4403279 19.5680516,21.5674348 19.1998875,20.0682859 L17.8937294,14.7526934 L22.2793686,11.1443161 L22.3984321,11.0405714 C23.4954951,10.0270601 23.0352205,8.72174778 21.479439,8.59636398 L15.6334685,8.12482574 L13.3880977,3.09014615 C12.7393731,1.6361626 11.2656405,1.63707337 10.6173223,3.09014615 L8.37094152,8.12482574 Z"></path>
                  </svg>
                </span>
                {service.stars}
                <span className="horodiv"></span>
                <div className="horotext">{service.counthoro}개의 평가</div>
              </div>
              <div className="pricewrap">
                <div className="pricetext">{service.price}$</div>
              </div>
              <div className="unitbtnwrap2">
                <button
                  type="button"
                  className="unitbtn2"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={() => onEdit(service.id)}
                >
                  수정
                </button>
              </div>
              <div className="unitbtnwrap">
                <button
                  type="button"
                  className="unitbtn"
                  onClick={() => onDelete(service.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowIndex;
