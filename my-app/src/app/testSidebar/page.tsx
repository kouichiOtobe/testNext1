'use client';
// app/layout.tsx または app/(main)/layout.tsx など

import { Sidebar } from "../Components/Sidebar";
import { useReducer } from 'react';

// 状態の型
type State = {
  name: string;
  subscribe: boolean;
};

// アクションの型
type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'TOGGLE_SUBSCRIBE' };

// 初期状態
const initialState: State = {
  name: '',
  subscribe: false,
};

// reducer関数
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'TOGGLE_SUBSCRIBE':
      return { ...state, subscribe: !state.subscribe };
    default:
      return state;
  }
}

// コンポーネント
export default function SubscribeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `送信内容:\n名前: ${state.name}\nニュースレター: ${state.subscribe ? '購読する' : '購読しない'}`
    );
  };

  return (
  
    <div>
      <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
        <div>
          <label className="block mb-1 font-medium">名前</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={state.subscribe}
            onChange={() => dispatch({ type: 'TOGGLE_SUBSCRIBE' })}
            id="subscribe"
          />
          <label htmlFor="subscribe">ニュースレターを購読する</label>
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          送信
        </button>
      </form>
    </div>

  );
}
