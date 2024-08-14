/**
 * @license
 * Copyright 2024 Qlever LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import this first to setup the environment
import { config } from './config.js';

// Import this _before_ pino and/or DEBUG
import '@oada/pino-debug';

// Add prometheus support and default metrics
// FIXME: Add your own metrics as well
import '@oada/lib-prom';

import { connect } from '@oada/client';

// Stuff from config
const { token, domain } = config.get('oada');

const conn = await connect({ token, domain });

/**
 * Now do your service stuff...
 */
await conn.head({ path: '/bookmarks' });
