const Engineer = require('../Engineer');

describe('engineer', () => {
    it('should return github', () => {
        expect(Engineer).toBe(this.github);
    });
    it('getRole() should return Engineer', () => {
        const testEngineer = new Engineer('maggie', 44, 'email@test.com', 'engineergithub')
        expect(testEngineer.getRole()).toBe('Engineer');
    });
});