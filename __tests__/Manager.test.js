const Manager = require('../lib/Manager');

describe('manager', () => {
    const testManager = new Manager('maggie', 44, 'email@test.com', 'office')
    it('should return office number', () => {
        expect(testManager.officeNumber).toBe('office');
    });
    it('getRole() should return Manager', () => {
        expect(testManager.getRole()).toBe('Manager');
    });
});