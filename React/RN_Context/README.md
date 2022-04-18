# Mengelola Global State menggunakan Fitur Bawaan dari React

### Perlu Diperhatikan
Saya menggunakan Functional Component

1. useState
2. useMemo => berguna untuk *memorize state* bila ada perubahan yang terjadi
3. useReducer => berguna sebagai pengolah state tergantung dari *casenya*
4. useMemo

## Step-by-Step
1. Kita deklarasikan context yang nantinya akan diekspor `src/context`

```javascript
import React, { createContext } from 'react';

export const GlobalContext = createContext(null); // Kita beri default nilainya berupa null
```

2. Kita import Context tersebut di folder route contohnya `./App.js`

```javascript
import { GlobalContext } from './src/context';

export default () => {
    <GlobalContext.Provider value={'Kasih value apa aja'}>
        ...
    </GlobalContext.Provider>
}
```

bila kita menyatakan provider di route ini nantinya akan ditampilkan di setiap *chlidren* yang ada di bungkus `GlobalContext.Provider`

3. Kita buat state sendiri terus kita buat method untuk modifikasi state tersebut

```javascript
import { GlobalContext } from './src/context';

export default () => {
    const [user, setUser] = useState('Hi You there!');
    const [count, dispatch] = useReducer(reducer, 0)

    const provider = useMemo(() => (
    { value: user, setValue: setUser, count, dispatch } // cara pertama
     ), [user, setUser, count, dispatch])

    return (
        <GlobalContext.Provider value={provider}>
            ...
        </GlobalContext.Provider>
     )
}
```

4. Cara Menggunakan lihat di `src`
```javascript
export default () => {
    const { count, dispatch } = useContext(GlobalContext)
    return (
        <View>
            <Button title='Increment' onPress={() => dispatch({ type: 'INCREMENT' })} />
            <Text style={{ fontSize: 20, marginVertical: 10 }}>{count}</Text>
            <Button title='Increment' onPress={() => dispatch({ type: 'DECREMENT' })} />
        </View>
    )
}
```