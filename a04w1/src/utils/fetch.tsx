export const fetchData = async(url:string) => {
    const result = await fetch(url, {method:'GET', headers: {'Content-Type': 'application/json'},});

    if(result.status !== 200) {
          const error = await result.json();
          throw new Error(error.message);
    };

    const data = await result.json();
    return data;
};

// const handleGetColor = async() => {
//   try{
//       const newColor = await fetchColor();
//       addColor(newColor.new_color);
//   }catch(err) {
//         console.log(err);
//   };
// };

export const postData = async(url:string, payload:Object) => {
    console.log(payload)
    const result = await fetch(url, {method: "POST", body: JSON.stringify(payload), headers: { "Content-type": "application/json; charset=UTF-8"}});

    if(result.status !== 200) {
          const error = await result.json();
          throw new Error(error.message);
    };

    const data = await result.json();
    return data;
};

export const deleteData = async(url:string) => {
    const result = await fetch(url, {method: "DELETE", headers: { "Content-type": "application/json; charset=UTF-8"}});

    if(result.status !== 200) {
          const error = await result.json();
          throw new Error(error.message);
    };

    const data = await result.json();
    return data;
};