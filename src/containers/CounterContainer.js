import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer(){
    //useSelector : 리덕스의 상태를 조회하는 Hook (getState하고 비슷)
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    //useDispatch : 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 하는 Hook
    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;