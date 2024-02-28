import { Link } from 'react-router-dom';

const BackBtn = () => {
  return (
    <div className=" mb-4">
      <Link className="text-lg hover:underline" to="/">
        Назад
      </Link>
    </div>
  );
};

export default BackBtn;
