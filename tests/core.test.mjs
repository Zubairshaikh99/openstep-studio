import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const begin = html.indexOf('/** Shared, dependency-free helpers. */');
const end = html.indexOf('const DB_NAME', begin);
assert.ok(begin >= 0 && end > begin);
const ctx = vm.createContext({});
vm.runInContext(html.slice(begin,end),ctx);
const run = code => vm.runInContext(code,ctx);

test('sanitizes unsafe HTML in exported text',()=> {
  assert.equal(run(`escapeHtml('<script>alert("hi")</script>')`), '&lt;script&gt;alert(&quot;hi&quot;)&lt;/script&gt;');
});
test('creates safe download filenames',()=> {
  assert.equal(run("safeFilename('My / Guide!!!')"), 'My-Guide');
});
test('validates screenshot project data',()=> {
  assert.equal(run("normalizeProject({title:'Demo',steps:[{src:'data:image/png;base64,AAAA',title:'Step 1',annotations:[]}]}).title"),'Demo');
  assert.equal(run("normalizeProject({title:'',steps:[]}).steps.length"),0);
  assert.throws(()=>run("normalizeProject({steps:[{src:'https://bad.example/image.png'}]})"));
});
test('rejects invalid annotation types',()=> {
  assert.equal(run("normalizeProject({steps:[{src:'data:image/png;base64,AAAA',annotations:[{type:'script',x:1}]}]}).steps[0].annotations.length"),0);
});
