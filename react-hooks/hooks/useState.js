function useState (defaultValue) {
    let value = defaultValue;
    
    const getValue = () => value
    const setValue = newValue => value = newValue
    
    return [
        getValue,
        setValue
    ];
  }
  
  const [counter, setCounter] = useState(0);