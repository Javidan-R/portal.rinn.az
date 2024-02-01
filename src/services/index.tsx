// export async function getCategories() {
//     const res = await fetch(`${import.meta.env.VITE_BASE_URL}/categories`);
  
//     // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
//     if(!res.ok) throw Error('Failed getting categories')
//     const { data } = await res.json();
//     return data;
//   }

