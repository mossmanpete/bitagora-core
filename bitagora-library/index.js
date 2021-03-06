/**
 * BITAGORA LIBRARY
 * index.js
 * Shared functions and constants for Bitagora Platform JS modules
 * Developed by Ignasi Ribó, 2018
 * Repo: https://github.com/bitagora/bitagora-core
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */

'use strict'
const { 
	BITAGORA_FAMILY,
	BITAGORA_POLL_FAMILY,
	BITAGORA_PREFIX,
	BITAGORA_URL,
	BITAGORA_VERSION
} = require('./constants');
const { 
	validateVote, 
	validatePoll
} = require('./validate');
const { 
	PollState 
} = require('./state');
const { 
	getPollAddress,
	getVoteAddress,
  	requestState,
  	getVoteToken,
  	getPollToken,
  	getPrechecksumVote,
	getNodeList,
	_hash,
	requestURL,
	getSettingAddress,
	encryptBallot,
	decryptBallot,
	decryptBallots,
	getBallot 
} = require('./functions');

module.exports = {
	BITAGORA_FAMILY,
	BITAGORA_POLL_FAMILY,
	BITAGORA_PREFIX,
	BITAGORA_URL,
	BITAGORA_VERSION,
	validateVote,
	validatePoll,
	PollState,
	getPollAddress,
	getVoteAddress,
  	requestState,
  	getVoteToken,
  	getPollToken,
  	getPrechecksumVote,
	getNodeList,
	_hash,
	requestURL,
	getSettingAddress,
	encryptBallot,
	decryptBallot,
	decryptBallots,
	getBallot
}