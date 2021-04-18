import { findIndexOfWord } from './array'

describe('', () => {
	describe('Testing findIndexOfWord():', () => {
		it.each([
			[
				0,
				[
					'Apricot'
				],
				'Apricot'
			],
			[
				1,
				[
					'Apricot',
					'Banana'
				],
				'Banana'
			],
			[
				2,
				[
					'Apricot',
					'Banana',
					'Cherry',
					'DragonFruit'
				],
				'Cherry'
			]
		])(
			'should return %s given %s with %s being the word to find',
			(expectedIndex, words, wordToFind) => {
				const retrievedIndex = findIndexOfWord(words, wordToFind)

				expect(retrievedIndex).toBe(expectedIndex)
			}
		)
		it.each([
			[
				[],
				'Apricot'
			],
			[
				[
					'Apricot'
				],
				'NotPresent'
			]
		])('should return -1 when the word is not present', (words, wordToFind): void => {
			const expectedIndex = -1

			const retrievedIndex = findIndexOfWord(words, wordToFind)

			expect(retrievedIndex).toBe(expectedIndex)
		})
	})
})
