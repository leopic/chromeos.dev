/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const clone = require('lodash.clonedeep');

const core = clone(require('./core'));
const app = require('./definitions/app');
const hero = require('./definitions/hero');
const featured = require('./definitions/featured');
const tools = require('./definitions/tools');

module.exports = {
  $merge: {
    source: core,
    with: {
      title: 'Case Study',
      required: core.required.concat(['app']),
      properties: {
        app: app.property,
        featured: featured.property,
        hero: hero.property,
        tools: tools.property,
      },
      definitions: {
        app: app.definition,
        featured: featured.definition,
        hero: hero.definition,
        tools: tools.definition,
      },
    },
  },
};
