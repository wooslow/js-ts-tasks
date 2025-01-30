import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import CustomCache from '../src/customCache';

describe('CustomCache string number', () => {
  let cache: CustomCache<string, number>;

  beforeEach(() => {
    cache = new CustomCache<string, number>(3);
  });

  it('should set and get a value', () => {
    cache.set('one', 1);
    assert.strictEqual(cache.get('one'), 1, 'Value should be retrievable after being set');
  });

  it('should return undefined for non-existent keys', () => {
    assert.strictEqual(cache.get('nonexistent'), undefined, 'Should return undefined for non-existent keys');
  });

  it('should evict the oldest item when exceeding max size', () => {
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);
    cache.set('four', 4);

    assert.strictEqual(cache.get('one'), undefined, 'Oldest item should be evicted');
    assert.strictEqual(cache.get('two'), 2, 'Remaining items should still be accessible');
    assert.strictEqual(cache.get('three'), 3, 'Remaining items should still be accessible');
    assert.strictEqual(cache.get('four'), 4, 'Newest item should be accessible');
  });

  it('should not exceed max size', () => {
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);
    cache.set('four', 4);

    assert.strictEqual(cache.size(), 3, 'Cache size should not exceed max size');
  });

  it('should update the access order on get', () => {
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);

    cache.get('one');

    cache.set('four', 4);

    assert.strictEqual(cache.get('two'), undefined, 'Least recently accessed item should be evicted');
    assert.strictEqual(cache.get('one'), 1, 'Recently accessed item should still be in cache');
    assert.strictEqual(cache.get('three'), 3, 'Remaining items should still be accessible');
    assert.strictEqual(cache.get('four'), 4, 'Newest item should be accessible');
  });

  it('should clear the cache', () => {
    cache.set('one', 1);
    cache.set('two', 2);
    cache.clear();

    assert.strictEqual(cache.size(), 0, 'Cache should be empty after clear');
    assert.strictEqual(cache.get('one'), undefined, 'Cache should be empty after clear');
    assert.strictEqual(cache.get('two'), undefined, 'Cache should be empty after clear');
  });

  it('should handle updating existing keys', () => {
    cache.set('one', 1);
    cache.set('one', 100);

    assert.strictEqual(cache.get('one'), 100, 'Cache should return the updated value');
  });
});

describe('CustomCache string string', () => {
  let cache: CustomCache<string, string>;

  beforeEach(() => {
    cache = new CustomCache<string, string>(3);
  });

  it('should set and get a value', () => {
    cache.set('one', 'one');
    assert.strictEqual(cache.get('one'), 'one', 'Value should be retrievable after being set');
  });

  it('should return undefined for non-existent keys', () => {
    assert.strictEqual(cache.get('nonexistent'), undefined, 'Should return undefined for non-existent keys');
  });

  it('should evict the oldest item when exceeding max size', () => {
    cache.set('one', 'one');
    cache.set('two', 'two');
    cache.set('three', 'three');
    cache.set('four', 'four');

    assert.strictEqual(cache.get('one'), undefined, 'Oldest item should be evicted');
    assert.strictEqual(cache.get('two'), 'two', 'Remaining items should still be accessible');
    assert.strictEqual(cache.get('three'), 'three', 'Remaining items should still be accessible');
    assert.strictEqual(cache.get('four'), 'four', 'Newest item should be accessible');
  });

  it('should not exceed max size', () => {
    cache.set('one', 'one');
    cache.set('two', 'two');
    cache.set('three', 'three');
    cache.set('four', 'four');

    assert.strictEqual(cache.size(), 3, 'Cache size should not exceed max size');
  });

  it('should update the access order on get', () => {
    cache.set('one', 'one');
    cache.set('two', 'two');
    cache.set('three', 'three');

    cache.get('one');

    cache.set('four', 'four');

    assert.strictEqual(cache.get('two'), undefined, 'Least recently accessed item should be evicted');
    assert.strictEqual(cache.get('one'), 'one', 'Recently accessed item should still be in cache');
    assert.strictEqual(cache.get('three'), 'three', 'Remaining items should still be accessible');
    assert.strictEqual(cache.get('four'), 'four', 'Newest item should be accessible');
  });

  it('should clear the cache', () => {
    cache.set('one', 'one');
    cache.set('two', 'two');
    cache.clear();

    assert.strictEqual(cache.size(), 0, 'Cache should be empty after clear');
    assert.strictEqual(cache.get('one'), undefined, 'Cache should be empty after clear');
    assert.strictEqual(cache.get('two'), undefined, 'Cache should be empty after clear');
  });

  it('should handle updating existing keys', () => {
    cache.set('one', 'one');
    cache.set('one', 'hundred');

    assert.strictEqual(cache.get('one'), 'hundred', 'Cache should return the updated value');
  });
});
