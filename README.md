### useState

- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback
- Initial state với callback: chỉ xử lý logic lần đầu, mỗi lần re-render không tính toán lại
- set State là thay thế state với giá trị mới

### Two-way Binding

- UI change <-> Data change
- Ung dung voi form
- Radio
- CheckBox

### useRef

- Tao ra pham vi global
- useRef -> return object {current: value}
- nameRef.current.forcus() -> focus to input of nameRef

### React.memo() HOC

- HOC: wrap component => memo(App)
- Parent component re-render (child comp do not use props from parent comp) -> child components is being re-render -> `React.memo()`
- If it has 1 prop change, comp will be re-render

### useCallback()

- Reference types: tao ra ham save vao memory -> tra ra tham chieu cho hanleIncrease
- Khi re-render lai App thi tao ra new scope -> tao ra 1 ham moi va 1 tham chieu moi
- Memo so sanh 2 tham chieu (using ===) -> false -> re-render child component
- useCallback save Reference type in global scope, voi dependencies ([]) -> tra lai tham chieu truoc do, tham chieu khong bi thay doi -> khong re-render
- Only use useCallback when we use React.memo

### useMemo()

- Su dung de trach tinh toan lai 1 logic khong can thiet

### useReducer

- 1. Initial state: 0
- 2. Actions: Up(state + 1) / Down(state - 1)
- 3. Reducer
- 4. Dispatch

### Context

- 1. Create context
- 2. Provider
- 3. Consumer

### useImperativeHandle()

- video 49/64: play and pause video (forwardRef)

### React Route V6

-
