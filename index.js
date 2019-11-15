const RegClient = require('npm-registry-client')
const semver = require('semver');
const token  = '281165ee-6887-48d9-83bb-e2fbaf393317';
const config = { token, alwaysAuth: true };
const client = new RegClient(config)
const packageName = 'ember-basic-dropdown';
const baseUri = "https://registry.npmjs.org/";
//"ember-cli-babel": "^6.16.0",

const uri = `${baseUri}${packageName}`;
const params = {timeout: 1000}

console.log(semver.validRange("^6.16.0"));
let [min1, max1] = semver.validRange("^6.16.0").split(" ");
console.log(min1, max1);
console.log(semver.gte('6.17.3', '6.16.0'));
console.log(semver.lt('6.17.3', '7.0.0'));
 
/*
client.get(uri, params, function (error, data, raw, res) {

  Object.keys(data.versions).forEach(v => {
    //console.log(data.versions[v].dependencies);
    let version = data.versions[v];
    let dependencies = data.versions[v].dependencies;

    Object.keys(dependencies)
      .filter(d => d === 'ember-cli-babel')
      .forEach(e => {
        console.log(version.name, version.version, e,dependencies[e]);
        if(semver.intersects(dependencies[e],semver.validRange("^6.16.0"))) {
          //console.log(packageName, " => ", data.versions[v].version)
        }
      });

  })
})
*/

