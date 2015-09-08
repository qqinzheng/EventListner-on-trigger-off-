import {Listener} from '../ontrigger.js';
import assert from 'assert';

describe('trigger', function () {
    it('should call success', function () {
        let a=new Listener();
        var test='';
        function abc(){
            test+='success';
        }
        a.on('done',abc);
        a.trigger('done');
        assert.equal(test,'success');
    });

    it('should output nothing', function () {
        let a=new Listener();
        var test='';
        function abc(){
            test+='success';
        }
        a.on('done',abc)
        a.off('done');
        a.trigger('done');
        assert.equal(test,'');
    });
    it('should output every function', function () {
        let a=new Listener();
        var test='';
        function abc(){
            test+='success';
        }
        function bcd(){
            test+=' double success';
        }
        a.on('done',abc)
        a.on('done',bcd)
        a.trigger('done');
        assert.equal(test,'success double success');
    });

    it('should output one function', function () {
        let a=new Listener();
        var test='';
        function fff(){
            test+='success';
        };
        function bcd(){
            test+='success';
        }
        a.on('done',fff);
        a.on('done',bcd);
        a.off('done',fff);
        a.trigger('done');
        assert.equal(test,'success');
    });
    it('should output function followed by right event', function () {
        let a=new Listener();
        var test='';
        function fff(){
            test+='done';
        };
        function bcd(){
            test+='click';
        }
        a.on('done',fff);
        a.on('click',bcd);
        a.trigger('done');
        assert.equal(test,'done');
    });
})
