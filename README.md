### Query controller for Next JS - App Directory

## Installation

```js
npm install next-app-use-query

pnpm add next-app-use-query

yarn add next-app-use-query
```

## Usage

```js
import { useQuery } from "next-app-use-query";

const CheckQueryComponent = () => {
  const query = useQuery();
  function checkQueries() {
    //Get methods
    console.log(query.getAll()); // returns { search : 'Ali Mortazavi' , category: '1' } or {}
    console.log(query.getAll({ toQueryFormat: true })); // returns '?search=Ali+Mortazavi&category=1' or ''
    console.log(query.get("search")); // returns 'Ali Mortazavi' or ''

    //Set methods
    console.log(query.set({ search: "Ali Morazavi", category: "users" })); // returns '?search=Ali+Mortazavi&category=users'

    //Add methods
    console.log(query.add("rate", "5")); // returns '?search=Ali+Mortazavi&category=users&rate=5'

    //Delete methods
    console.log(query.delete("search")); // returns '?category=1&rate=5' or ''
  }

  return (
    <div>
      <button onClick={checkQueries}>click me</button>
    </div>
  );
};

export default CheckQueryComponent;
```

## Features

- Very fast
- Very easy
