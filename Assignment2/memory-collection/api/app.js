const test = require("../client/package.json")

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
  // next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const pupperUrl = "data:image/webp;base64,UklGRoQgAABXRUJQVlA4IHggAADw5QCdASrRAPEAPtFepU6oJSMiKHSc8QAaCWMzrk3XY+Pr/+8BTIBcVYilSS6lMrr2/0OZH3/D7s3B5d4r/n/3LwisffbxqZbx/a/2p/sX1texf+xbquA3+E/5nmXz/vnD/J++O2Lfxufk1jvuH/n9M42/OMfomjPYsnNb+1BYTVqo6Woh6j7Rq6p0/1z5asf0QIbj2tKuTuXUhf6os3gek+uL9sqn1GbgcaFwh6D+0fY3VRSvqRU3Kj2aZhbZDYTVIFLH8mzBoN6L87YmWSEdVDLRwidtZ6YsZ0jbLYhvnBZP3p044Z3o84cjdwpDYXxnZexFsQ5McL+oTMISxze8bXsbhQHDsjpj+1JTEUJV0wrCJwCHGIXmWI+oezOP8IMxCWzSruE5bKWJTkx6+Uchkz/lzLcKcgv+HX7Pvy5jIV28kP9GA5XQAe7UhQ89OsopjDHdOGGYdza0j7h5g7KPqDltrJC3WhZ+eryB63kEwBe5vsrGrUZ/RB+zEhBA4Etl2hQsDjcUgJ8asFXD/hls1/U7wtCBU2n9Xwy+dp1tnJoKP5IE2Piq8zK0Iew7Fdt5GEUdalrnMgMf8p49SqO5Ht7ZIQlR0q3uCv8dGLdjI9Izs2zTOxlc/Bmn72QOa3WpiUWbNnK9x1iQbGzjT/TkCihpNJaTyp8MqEpRbRZWARRdIBsk84sSBxLFphs8+5o+AE2WnXmhZlyH7bCZf6v1yEQ48RkgQyuSLrNVAn3ycfxAd8sHhW74VwpN39kns4frzvdflc5lO+rwM2CdBtFUlltpkIq/U2xZasAZG7E33ZzqRhJ1ueAbXE5xMseQJlZz4Qke6kjug9xjCy3//d3loukkLMB00HxB3q7859gTFjHD1OkY2KPocUOYR3i1mmtvsKOzJlNLE6tKX0RzKwT3YC82pU/L+GlgygcYjDkkMVkcx+fzExchjMQl8R6dt6kq7XES01x61CznsbK0FnooEnhdoygbW0WcDZ7fJdi0yreyJ9mC4FDkD6ANljpVqtgSDsU+v4CtfnTnDfQa+Gt503u4sUxgibmDovcmCLwrwPOnChWlqopyvQvTkrqILhRpSC+8TO7A06WoO7Kvmc3nZIgvd/7FPWyUTYoIXlU1/sADKeY+iKlK6JdCZXEuDbPDqHSOwmBb6M57ajJKUTqoR/3frhz0RkZ/VYgLP8Jx6lnC+1EtDn8n8kIx43JAgzuUyJbMADWVS8mUqoaaaWQq3Oef9Mah9x0JBI82TVFNuk7AxSGyAN4WIMvsezwTR1Y+w5voACVZlSeBQLRmqVjah5G1mqm1gQhxTURfixgjjb/k9cqAyf6OjSq2jAQOVdOv6lKSmE1esBk3t94rPx/D30ZBuslwCXjGysr1kREkbggId17jFjbcccH991DPfCUklMdyhpUYsO+fBLM94HvBdGWoK9HrB2fxh5SjzzSx27RiC4xHpZQKl2Jq+xLHk+wQf15yW0+3+x0G7fjM1NdWFNraf4FW0ESoWd6lWdYqGow24FeCPtG8/WRo7AbPSz239GcmZBSiJ80CmIx01WvLxzcl9HD+rfnLgMSYpIJ/ulj8tqwz0P5v/iMB9nFpgpe6G6bClUSCWs8se6YtR21B/xsIYPMEDpye50kApRebZU6Sofae4iruVX9u7ceDkxBXjoeQ1L4cC4G4z5WfxbIrZ/1S770JxJQS/6fp/HhimskA5I/7R8jML3SDAunJiPMytbYTcFKGr/jugNlbIJfUD4jv/UROjZ4RP1zUgszFAR1GrathcxYCFBZKOIrOjUevzeBfOm4h8iKt86zr+8IUnp7IVuB7GpUnDJ/Opx8e03tZC+DimKQ4dIa6+k4NSgW8g4WS01eT0INhMvn5D+eAzYv0hthKdfSZI8NBq/90vkVMaTlIkm1DSE4oHB+06jxg4okpRunGklmd+fAOr6kq1b5niL9solnq/WbjPnJ3KnV1sUx8dTxatHjs5J5yjGCFm5fKFvIyfwlmdqAtLwtv/LPFBOP77+SQtTpCrh2NtAbdb7E3GSMZEOz3twKi5qVCwtK0QxjaOWsPDHVAtPSBj3c+fwpnDmX8kq8prIuBsmdGYZD+4vwGWEN+tnWXN4syu5oLBGqiCUfdxEEcRgavQaXVYx9//ijX2q8DnLQzi1Kxbpnrg9+ew4+FocKG6fribe+P3glZchg0682W6T6/y83W1W2+2LXjYeCwBvvSmiQa8Uzifud9ajSt3bovsD6UtF06+aueweNAOWQCF9CmQkk/EpWG7nF/9wn92wurYg/wO1v8bbtn1JYge5a/SrBP9En8tTYPFXKr3oUu33JUXcQaUDLZVaz5s+LAKP4PfzMr/Sw9wtgsP1/gyjSQDm66TB+0SqSufNhLqzC3/3jT7vLwUxErxenu9tOjSJhF0YRGLxDffecH2Jfgndx59KrXOPPe8wGJVRCyrL+Mj1TShUhDC5hl2QAA/u92GQzSxuj/jDcrEzsHPe3dXN4brQpvNRtXOf+worKgp+e7uip6EV4Rucow40No+rCh87vLhJ+GWz1pJZlL5z+B2j4h1svWqBB1i5Olzi2V5e0KPp1rPUkIqiv1MC/tB8CH2CDusgjTjrsmoZ0mdtfGtl1xtHAqgOy/tU8vU3y8LGkM6aq7aN+X/UKOzR6zmtyrZSj4uOYbg3maJyehBl7IfZGzVlnvVxPqdrEswjOXgMYizroqdfmjsp8YjGe+i4zBY+fuTFC9CiYQlu7QPZMrJujT3Ip31H2YuMezCXcBmHy48YKsOfU4BYafivFmIQ1SfiIv+oI/4EwHVMFpPnP+MYvSjrgFjj7cm1MiG/xGvyQSd+bHNWUP6fYS0FM1Td2+y5BFS9U3uj97PMKZwTOszZ5lFta0P5g+a3U8jCzVgcFleCbccwT3ixH20sxlDO12ZqmWaAzRm8DQx9XnrcLCBsxMyUSXcMIqkju1EIzaASKdNyyx+Z8iHGl44VdpQ9Lk1QNF2G5uJnxneG0Hl4GwIMqWeUnDTj/8MGw+Dc0tZyPB6osLKvtCb3/+AZ1KLDjEizQGlLb4zP2bT+9TMR9XLFLYcy2b55hueyZem5q1f5K22NzZJF+WC9a4MguJHAsGm14iN/HPxK6khPSzF6/We61NqqAFhvYtAuTHiiCQ8l3AU5j9foJbKWZmIlcUaUZ8x4pQ8S71NMBxz6Fmk15DpskGGkznzp3Coob9MF8uLcVB62J+43F/95qMFxTYm4JMudNAqoYuzCVtGpBS7v63Jfho3iISBV2ai/sD8uwwoK/m5kSC/hbOJGVzfr27m48ZsPmtnbmNQVk6UEnusv1jccdcdrNP0PQ4B7nnykZNBM8mZOvsqamn4VTzUnpwfIBVJFgTOCDuYYw9S0KxAU9G5WDdQvaLhpgPN4KF37R9gGGK177rq2E8baX6pPwYbJ2yhhtbz8OgWcxYwYGkFu/Cq4878sOfSbG80GLLMiEXzHe8N2ox0Q08bcvGwh1YQh+vYA04MzcyNPpFwIt1UrtZ1hGZHcesL15FP/IG+DRrXWjKgusSibiczMYyRc3EuDFtDQlsN7zDxBuPPXUkXLxAMo6W0KWsEh49nOmMf+2j2VIL5IRaH/vWDUJ72RueuPKR5Xtd6UySvsCwgcHHc4fT5OpVAxEli+shd6eNXvhZcXv2JDIBveMp7sA8loMjprAq3fVRmYuYjgkajTesxpVhQhfYLT0P7ExeHuktKpuSlGi0EOaiNxtWLUWCDDhDPaXTKADXlWX9IBgJP2a+egznXcqUk5ubB5Hp8wgQfLmM/qTOYCyjvPsY3cegg+udtHPOuzd+GvesHzDCmiEpmKnN0NV7lkOOixml5LVfslyIy2V2e2SKmEUy/x/ABoPz8XaHBFse5qyIwNLhMoeDio+TvOAU8ejAm2DmisidmMWj0VHx9uslyeCZeYzuhJueJAa+b75hNxWBEdm/T8eB+ndOJ4jQSKCys3TLRk/9L9ZZG4ZjQzhDGMbMaIsUBPfP+StYDCpCynyG4l1EnNJj9dMF7isQGHQZnl/AKcobA4mE77r2KTj9tcV6cPaqfVSXMnXx1xKZH0uxNQ0E58xOM1uW5+xwmZhIL9w+F9wr6eg2RdUDkZ3jI3Sm08llo2l/+voEe/GhNOQ+7g1pD5x/7R9drkBGFOWKGFB3CC7V9zr4htu8WsHn418na8NdavHa5cgvK8bXMJUDWORBmBpTtFFPt7T6WgdLFrGpKccUgB1eb8fiHpQKuINm0kSsynDeQLIH7a9LNtsmX4gAqkK6ZwRSCdptFS/GGdCFGqDWGhPkI0iGz3pCL9z8SxWOPNEePVxoicOEmrj+u2/J6JCeavqQ1Ij70UGm2IssRoxKc4B6KybEkl5Kk3+48FWRBnG8+U76h88T+nYwXkzcnUFy4ckmD5+uzVkCvyrfuvwylYRe99rDLo32OSS+F/9FlKd2mGaVXzug3nV6B93+0KWUwkgiOBWfCvUsFpMkvQGk5BYLUmmc6fCUOY3AP+fa7YBPYBk1tHUttT8DAGeXKFy122IJD+gQDZ2GNr0bxRRuYXZIqouIDoxJZ5LGpVQfJwiCMc+SVQD8EiPjc7JbEqpXXkwVBvTJdi93245r/BPCRPIQsknNfcklpYtgA9sM2n0Qxolw4iJIqQMUujAH9wDKWLO8otGWtIzjZEbsq0omPKWTlYx8XBo3nbK3ZA4j28p5ZzuJQUmmZ915nQn826sbD9/CucmnLEIMMwwVyvTV0OxeKuM/aq7FjjhirjjugM+wO9Tam+foj1CV8Jk/TgPQW7vDsp0RpKpmqeBdkDlG5CIHwdtTlOGAgpEZYKMJvTAkdTzIqygkAuYA1sy7maNyKWsoYn2sM91tioLRwoK/Zgp7XiRG9ZIvof6MOfOYedF9AlA2zhcouYbDL4cAtpG/1RQHGQcGmX/0tl540Wrx4NMvFUGLfN7I1IlN0xLHTEDAzsw0woWBiUO+uCaUeVEf3uLGRGMy0JNxgOcufZWglowIXhZ4k1GhwfHEQqtbDK3jAXSelIxSoacvRTgUurBNxGgOkRvIen2ozmEZ65QQmBOtik/jZHjNHClmW9hBcgRg0VfMhqeM15zwSlHvx+QzuJkXHPGiHeiH6wIsXpi6pI9dhOWPUp3UV3UUPXMEECm4ONefTguN47Bk/BED0pdKppsttgqEI5bRkBwZ4yQVs32kKV9og2hhLmWkAYL2vkxdDWDtjafSo3e8PGiTwn45HqfPCxhnopdHDSEz9QYzsLBi+SvCxiIw7lstjbWjFSt+tWddzwo9Q2FV4PF45pAT3A8RgXBsN/ON6Q6W4kFLOuQWdYSfbTbvWwjUGEVCYsXjNa9tKBx6YC2lzx44WedUwlEamy+SARC1TshdgbuWI5QPHq6Rws2w5fQcufwvyzJOZ0gRsgtm8d/U3Qoq6uDuuimr6P/15Kcmrqq1RIJYDPJ82sX7cKgZcu4D5DejieyG/NA0dGqoL8uEEYlGSHrq+9xP3bkDbUOfD4/9YaJIJ6BxilCRkfTT4kU2kCTy4Y2rnCcT2EkMIG80A62/aCOauSo/hOjHMqdhO/In1jsI667ImMaW5ZXKBGdoaWs+SqwMaiBWhYYWM1copVR8ce4TnQVcrBDEi4vi9EnxtY8FRCboc8cxv75AEGcU4LyraL1XaEQ1GcJamZbJ4Ho8ne50n/4EGkepD35pEGuV0W8O8hcxhlVbDGn7uWIMCWigMtTlX28nIGz3UkxFKU7LLUukmjqHnXCcVqI2As4LUg+FsUBQ+8eDXdcDSvBqYlrCQQg5rBS5zlf9ZUw/SwUmPlCsJPRS7/jB2ipKn6vo8OBhJBrRYnFt7o6Wm1E5E3pxsf2VVo+JzOazUsyevVLhE2R+byMhFASzq8f74YjyHqGsjcWydCWvICEG/fs4U2NOKQusXDcvgYfmIY/VzCC0w0ekQhb45RzauWAyw4qvnMAXs9mFvVVi6XJF9Rs4fgpKUDut2KiUYPTQxbF3YO/0rsXEISdTMi3THHQOi3OfkA0ciGPiGgi95Kaw2vRTYZCXvVe7rTXCZyw15CAcF31xItnRooT4fzhlDXGsV2rna6oWPZ/3Xnnv1vpx8EWoZ+j6SqpubyzB3Ud8U1F58IbWgaN/veK2+181dtR2KpkW96NGuOEtJH7J7OoDtI3E4jPdiVmlFTjX61y+CtGFz0dH4trr4YomxGCcnOM3VfhJlYHMPY6ewph1OAQXt9ujcmeLUlrqW4UdBjCpoiKy+5enEzKVgotloghAFwG6KkAPauXyShS7uqpuiWOQnkqJeQaiKdbxlb00D6hIO8pBp9FdLj4Y+D+ZbGDNf7onNRwDm5CBxWAOvfjiPgZjTvqNGf3QAFCz+tSQU/rv9BI6dP37ls5SXEI+aXuBTFO/lyGApe0yFVjzYD0pmTcTV1lYZsr4ztqIkaIaIlNvgLXLELWND+kW00i7kGpqUTFxpcyHA0FFGFcf1ZxA2Vctn3uXVFrERKhUUQX1X4HFoLSH8QfbU1sk/r+gHWKegsdHNs7Y4QB7I+Mi8EV4RZAUcDzo25WQ3mpBF970tuhU411DF7QehOOFnROII15HyIajtiycyQTGgyNx1/7ajHTe/4kPBN3Aa+hRLUDA1ewzr0GSrqpiBDvizOgZR7zYHMXFsht1ePOrPK7OknWy/rIBG7ZxZjGuOKQ3Qp0Ir7NEqMGxmTkZ0SYp3CMHJmed4dNmYABGFhNPbFIvgq5ckiyMwbCIahSNvgDnz1Yj7VzGur3CSQkXvuNsLkJ2k28YhWz/wwwVFe8ARC+PIYa9OhGiRuS5FgZSJkmndxFVqb9IAy3X/G5aQGruzcJXGcQzqMZ/Drd5w+Fvzo1V2qu63eLeCx0Yq93sH/63tDnCtunx9b3snPMOGLFfT+sEI6dlTUbEsbxAxEy9R2K8iFajTkar1fJ7n7B/Av/k3aagjAnE5kk0jiQn+FDJ3xpENrJgm+opn+4hBGRPw5LlnzajRwnsx8L4W0VW0pAj18pC7CbmEnH1fThXL6MdaDrGYlujEn8Mo5MfZu+U2Ov34QBHtE9ZAVnLxGo95ZmyA8Dwd0gyaJuGMIlTc3pR6gGRgk7UpcU8UfvS+gPJXg35M0pXYAJmhBoN/2aIAvh1s6soaQjv0R5NXbh4Go8/Rh0PUCymYhmHJkzLlIZMR+pTPVZaDPv5qjlG2uM5n0SlH4L1Gub/DbtH0b/JKSPKYD3LWJG7j1N0niusbuuJj/WNDcOelQ65r5jgAD64P/e8NdossY8DvJhIqtbrBFnhBnuVau5glFxRBDR+99j4ZS5BNelZXxY8diyZ+fAGym7Vp4gZySrIcQedxON6PQatKte2nV5XWSMjJO/aMpPR7M+WynCbZGtS1G8mrUAKL2ndLJoxl3isX63DGYzmflLR7E7t349Rh08M0/RRPRfJiVMpu+HMdFbdeDui6AOd/HGPont0p6ulfJVB99Dv54F07eP2oDw/CnvyO/Sfmym9L+KRhO4SCX3Wydw1cFVXg5EBeRIBVU3uOPvIcjN8s+BgjdmiTqiPFAgJ0ziIXWaL7jZVwEgc6zmbi+4pRzB+Sdty7zFYTpKYgg5liviQQlJQgxxMYLJxJq/16eza4YrEKWFIvefi+C86WYySe0dsA/GDLXxj5PuLmzETasjcMt0ARALu5mnBQQcpQylYM+8zE/6B0PWOonPI2EKiTL82ndxHuk3UOkFvdYNbdGlhHwt2h2eZdo6QiJkCCqO1k4tESRjKykHWtm+9gIlJoHD9ldXcck0e/0fEFeFpKORw5Wzivqt8YeFxtWlSDTDtHZ81rzA4TzVIH2il2tYV1MAJvMjcFBd76gvhtjq2pVMCjivimkAYZALTYwo3SreBDCMz+fqWydxrwu/MycE56lChVjyjWVREgDI7eCboKIorA38jugCLRdpTRvRBIJ1+NGf0maOvuMzgCVQUbLR2BtPFg8x3nqZiMY9X8okKC5zAlfPvdf1Q7E4Z/p1d0s6weoOmq8PekgcCWn/XARJGGvNVI6yWDqOwXXkEHW6AklIeIxirTmR2yQqGJSWr9OCRSP+boNiFj6WqDPT+hkpytXdYlKc5+HsnrX9R3PdcqZR+nHLwWTjC7z/eDEfj617j0B2AQocOMAJwQfogZFITICZFEzND7+ATR9IEdEl1B11RHnRpz1pKRxIKFhQ9/K03xdpZ8eX9kyh3uQsJ2t897rmHeuGLwkwwZlQhRPBzVGL9IwAQnbFnX8bERIlXNDkm72EGfiM/wfZ6g/mQ24PYuNHpbnHJvUrMy+9r108Wrnayv+RI8wnApg9cDh2FVgqYccOMggbEQRxt3sgcG8b0HbK3shFqUsi6kr9NThzWl7UAe0yGlGC4NUHUi2Xs6dyEnong3gewCla9orS4Qs4OQij9n6+F1APtjzlVM8oePKnQweBhFs/2uJnk+px/WAstftBuUBRU5eSiwZLjUQ99LYmZ6CmwQnz8GQ+wC52uI7X2XMT0ZmwMR5TIDBVAKN8wBCFYucaYln6RH4u2FojB678D5uFxfatqjFe4zm0zcEHG1AtLhoWyoIdLPmLFfW4bqM8GEEUDN3UIQTsh+bKmAL9t77WQM11hk8slT5lPVJCHUHesH7nscR4UEle5C47rD8OVFrh0doBSL2XdU6HfbEpi+pEl8l/Zt6WCIK/wa2C/mZ8UivvahG7vE0iloTio+3E+DMUjl9HLAgDb7YUyD19+x9KhL6JE6CY6QLH6LPWXeTHcfM21vHRXGbn1OiBHvogFDMWzlT3EqR1HNnK92OpQA8pBMA+fFt3BzAB5kvvZZeROUgfPV5yJatMpTThmoUHCxkuqkUFT72bb2+UCTopC3rj+ZZj66w2QhOlosJiQTMco481BFSHihGyrHdGU2gzMzKIJ2Cd64MeSzB7TmQoS1Rs0eAYO7zf8WhBakOUAO2pyJSxupOJdhqbpodpPphNvVok2Z6twyStPOIydCdnCzeCcnaVEYKrU5mlQNFiNZHTN+0zFYmsXvA+fzb0EgorBXzhfvUDIlliYzUaglZ6Z7vquOUyMQN0Wm7AiBEjpFKZguAjjRaHWkC0jwtmxp7rfn6z/0NHCwkTmHX5PdIqMhxJvAGp0Rrfq0U67iA/h4CDdXbIzUfrBjUKx2xO9YYiV/0w3dGTPrk37I5HMgHuVtTLWvUTjxrfG8vFb21iIc5B8iH8gqiIdsGa9WwPcpPAEvvBa2eujBGju9mg5GQ1R4WfK4dH3VdnmPV7k0Y22hYH9yHUJhlMQaFKAu0LWISbtT/P5BjQh+Vk/aFYo9pMbF1URna9IpOXUbabHzbX41a9bUxYO7UOSQzvFEfetn3CN2c+HW/Q8duougDDvLYP5QbvpwA2cVZCjI+Da7BzsoUeJOb6EhTOWXUf+r5wl/oIjnviUDNj4oPwYmtUc7c5LgrOCHD5//pD5V/DhbBEsztM0vvCiH68S8mvQX3xM9MCzrWshZQ6ZpxcWRVlr56QRpClM8+M40HLn+o/PuK16nvm9gYvp6rwdPFENSNkcY6c6QoT4uopWLAeE81n3vx8RyIu364MT0OMjaFQDzfLBA5jv8PKp7WH59wdmFrTABT2a+2e85ahqKizUluxmqpSn7mhIqUzuItyhbfthwRyiwslpp3zfksqRNCc1EAB6+OtOcoZNnuxfzihBanD+kqJs5eRMRUPHyBQHPIkOp0eMnmneJQFB5fPe6i7crVjTfvUAxAlEnL8PWz3xSjxnIldDXtrV5trVEwT/SjV8gkMFxvmDp7BqtEIAbkFD5tw1I7uwipgiZYBtb3Sb+U2Y2v/uH4pt1U39DmX1Qq83aC3x9U1PbxF52kZA8DG4dnCn4/PVNxWBhRFAXasAfZrpxwP71EAng0AS+vu5JRaSzD7nP47MIXJe7odnKixr40ckA9MD0pSepPDQH53kaB2Ff/vB09PsEUHSqRFAukFSh1KPUqwLSt7hcihcOdKavH+lCpZZIGjJj39+rg4z7efoDog+l4YgAesxOoZZBn4ZnO/p0N1VQ2jRNLFqAAkjhNArhkgu764quoxGUkgeu2+sjkxXoUlsraC67iwiOM1NPpvJcWWGlRReX5qQ/qgQxsRmWTSU5X6lwJBqpY7o+pLrWwlQ0KKa/s15p8ZDnnGGUqQp4uY3/vhyNS3zb9kmZHMggA1OjMRBwSJSKskip7Hb0EKkSZcLgLdm8HfnHgS/XCRuZQrUzxho72pGQ/HEQ58I0A2RVko+1EyDlmr//5WswWNLUlhb3kSrUwILOnP4k0FOMS/xU7qj+z0Va/wbxqMj3odAuMjIvcgWJcyhMXMtpZuMasCs4PC6mQIZZsYoeAP7RyR1ItqbLXn/c2PapP/+R+Sl7zyzwhkulYlYf7k+aCofjjQijhl6QdZRpXM+CO5I0AOs91/dp+28h1B3DBnc/GyKTLOQAdzQBv7/mNsi+6pmu1/QKgOemDunBiaGkrcuxdgTsKPo96adWVphx0YvaBXYFCjBERcyUpq5n3/EIa6rh4tDUh4x42hkNVhgney4mBC5UP+Ud02j2sLHi3miQqWdgppJu/nvJgyrx3ny8AObOmb0DipJuTiZbRshmMFb4VVsxYjQJJdwJ/PdRYQebkxmoBoCoCsdk+yVzqvkdUmtJ/rXzSGoWfjbfwQ80hfQ6SpClNhrAnx8ypTE16XvGtHKiONWlvAz1E9KUAFLv354hc2996bNVqg3OKZrtD9EQOG9Ti53S/knQqiiaNnLGKh9XzS7Dqfi7APhx82CuAJSoeFFZYQ2aOpIqWxkYa0gMZGynfgBeO/o0arIFQxHoAsWqgCDaFp9HStp0KJpmcXt0JawqArkY5WzuygFS6lDfV7glDvl//FcfaAmCYZiK+Nrv5915bBoquM8xtcQfLxwp4Djq8B3EygyI2ej/4Sx56MBubMFmJf0pfMEK1gMrJljDEyywqpHEGt5jgWFNOiCp/s4TuG5Uu9vwVt7yma6fxooRlO6X9mDpCtuS1ess/TDZS9JpJydHN7WkWGa9jS6+6teCCFKiiivkO3Ti2T+dLW+nCuZZjfI8sT1l4ATiaAAAA==";
const disneyUrl = "https://media.cntraveler.com/photos/5f1062d121cde6e1168e6143/4:3/w_2276,h_1707,c_limit/WaltDisneyWorld-2020-GettyImages-1226596749.jpg";
const picnicUrl = "https://www.avenuecalgary.com/wp-content/uploads/2021/05/Bow-Valley-Ranch-Picnic-960x640.jpeg";
const beachUrl = "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_506,q_75,w_675/https://res.cloudinary.com/simpleview/image/upload/v1453938131/clients/vancouverbc/Kitsilano_Beach_ba4c5168-5bcb-43de-9c78-13543c26c098.jpg";
let state = [
  { cardId: 0, name: "Pupper", url: pupperUrl, description: "I want this doggo"},
  { cardId: 1, name: "Disney", url: disneyUrl, description: "Disney California Adventure Park"},
  { cardId: 2, name: "Picnic", url: picnicUrl, description: "spring picnic in SF" },
  { cardId: 3, name: "Beach Day", url: beachUrl, description: "summer beach day with friends" }
];

let curId = (Object.keys(state)).length;

app.get('/api/cards', (req, res) => {
  res.send(state);
});

app.get('/api/card/:cardId', (req, res) => {
  const id = req.params.cardId;
  const foundCard = state.find(card => card.cardId === id);

  if (!foundCard) {
    res.sendStatus(404);
  } else {
    res.send(foundCard);
  }
});

app.post('/api/card/create', (req, res) => {
  const newCard = {
    ...req.body,
    cardId: curId
  }
  curId++;
  state.push(newCard);
  res.send(newCard);
})

app.put('/api/card/update/:cardId', (req, res) => {
  const newCard = req.body;
  const id = req.params.cardId;
  state.forEach(card => {
    if (card.cardId === id) {
      card = newCard;
      res.sendStatus(200);
    }
  })
  res.sendStatus(404);
})

app.delete('/api/card/delete/:cardId', (req, res) => {
  const id = req.params.cardId;
  const foundCard = state.find(card => card.cardId === id);
  if (foundCard) {
    state = state.filter(function(value, index, arr){ 
      return value !== foundCard;
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
})
/*

state = [
  {
    id: 0,
    name: 'asdf',
    ...,
  },
  {
    card1,
  }
]

let curId = (Object.keys(state)).length;

app.get('/api/card/:cardId, (req, res) => {
  if (!state[req.params.cardId]) {
    res.send('error or something')
  } else {
    res.send(state[req.params.cardId]);
  }
});

app.delete('/api/card/delete/:cardId', (req, res) => {
  // check for card with cardId in the state
  // if exists, delete it, res.send('success')
  // else, res.error('couldn't find card with id ${cardId}', 404)
})

app.post('/api/card/create', (req, res) => {
  const newCard = {
    id: curId,
    rest of the card stuff...
  }
  curId++;
  res.send(newCard)
})
*/