const Car = ({ carCompany, carModel, carYear }) => {

    return (
        <div className="shadow-md p-1 m-2 rounded-sm bg-cyan-600 text-stone-800">
            <div className="italic">Производитель: {carCompany}</div>
            <div className="italic">Модель: {carModel}</div>
            <div className="italic">Год: {carYear}</div>
        </div>
    );
}

export default Car;