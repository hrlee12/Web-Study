// 한 파일에는 컴포넌트 하나만.

function Clock() {
  return (
    <div className="clock-container">
      {/* toLocaleTimeString() 현재 사용자의 문화권에 맞는 시간을 표기해주는 것.  */}
      <h1>현재시간은 {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
