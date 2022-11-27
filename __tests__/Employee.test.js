const Employee = require('../lib/Employee');

describe('employee', () => {
    it('should return name', () => {
        expect(Employee).toBe(this.name);
    });
    it('should return id', () => {
        expect(Employee).toBe(this.id);
    });
    it('should return email', () => {
        expect(Employee).toBe(this.email);
    });
    it('getRole() should return Employee', () => {
        const testEmployee = new Employee('maggie', 44, 'email@test.com')
        expect(testEmployee.getRole()).toBe('Employee');
    });
});