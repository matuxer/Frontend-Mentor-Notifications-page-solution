import { useSelector, useDispatch } from 'react-redux'
import { clear } from '../features/counter/counterSlice';

function Header() {
  const count = useSelector(( state ) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-row justify-between items-center">
      <h1 className="font-plusJ text-lg font-bold">Notifications</h1>
      <h2 className="absolute left-32 text-white text-sm bg-blue font-plusJ px-2.5 pb-0.5 rounded-md">
        {count}
      </h2>
      <button className="font-plusJ text-grayishBlue text-[13px] hover:text-blue" onClick={() => dispatch(clear())}>
        Mark all as read
      </button>
    </div>
  );
}

export default Header;