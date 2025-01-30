# Tasks: 07 Typescript Classes

## Task description

Your task is to implement Generic CustomCache class.

### Requirements

#### Create

Class can be created using `new CustomCache<K, V>(size)`, where `K` is type of key (string, number, etc) and `V` is a type of value (string, number, etc) and `size` is how many elements cache could contain

Public methods to be supported:

```ts
class CustomCache<K, V> {
  constructor(maxSize: number);
  set(key: K, value: V): void;
  get(key: K): V | undefined;
  size(): number;
  clear(): void;
}
```

#### Funcionality

Each funcionality is covered by unit tests. You don't need to write it. Your task is to create public methods that are covering funcionality below.

##### Test 1: Set and get a value

Value should be retrievable after being set

##### Test 2: Get should return undefined for non-existent keys

Should return undefined for non-existent keys

##### Test 3: Cache should evict the oldest item when exceeding max size

Create cache with size 3. Add 4 elements. First element should be evicted. Remaining elements must be accessible (get method). Fourth element should be accessible

##### Test 4: Cache size should not exceed max size

Add more elements than the maximum size of a cache. Cache size should not exceed max size

##### Test 5: Cache should update the access order on get

Create cache with size 3. Add 3 elements. Get first element. Add one more element. Least recently accessed item should be evicted. Recently accessed item should still be in cache. Remaining items should still be accessible. Newest item should be accessible.

##### Test 6: Clear should empty the cache

Create cache with size 3. Add two elements. Clear cache. Cache should be empty after clear.

##### Test 7: Cache should handle updating existing keys

Create cache with size 3. Add one element. Update that element. Cache should return the updated value

## How to run tasks locally

The following commands are useful to run your code locally

## Once - install npm packages

To run typescript code locally run first `npm ci` or `npm install`

### Run all tasks at once

`npm run test:local` - iterates throught all `src/*.js` files and test your solutions

### Run a certain task

You could specify a name of each individual task to run that locally

`npm run test:local:backToFront` - run test cases only for `backToFront` task
`npm run test:local:sum` - run test cases only for `sum` task

A list of available commands is specified in `package.json` file in `scripts` section

## Commit message rules

Please follow `Commit message rules` instructions provided on `main` branch.

## Evaluation criterias - max 10 points

- Test 1 passed - 3 points
- Test 2 passed - 1 points
- Test 3 passed - 1 points
- Test 4 passed - 1 points
- Test 5 passed - 1 points
- Test 6 passed - 1 points
- Test 7 passed - 2 points
