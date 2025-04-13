"use client"
import PageHeader from '@/components/PageHeader'
import React from 'react'

export default function Gallery() {
    const images=[
        {
            "name":"Canada Visit-May 2023",
            "subtile":"6 Photos",
            "images":[
                "https://s3-alpha-sig.figma.com/img/e9fa/e468/ec540866a6f680d857d80462aba7eb16?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fi5ZgDzFRBEuT8TOor3Y-9o-IiFP7rfcKjFlk45s5CzbHjnx4Fzz-gej3y1B-cqI8L0ruI86k35DqlEIIssoKp7BdoOrJLOKy3dDP03LAiFqO0fvxqesanWh5G17~9QSGwPj~o41jpyGK2EbCXpolGF5WKdPoRrtIbyLZNTp06YqIBrrIDQF4NwRs6xgmsEvj-ZMOp8MKJmPhDFPM2gs53jqpM9~F7hzwLgnewY7YgCz3E0svizUSKef3gh-5cUQlzcSldbdWW3fhB-exKcltOEQOuKaGalsz1SZeinmJtx2KyO7H9Tf8ra-UYe6DaxyWmLjBHrkEH8Qvmx0TkkNWQ__"
            ]
        },
        {
            "name":"Denmark Visit 2024",
            "subtile":"2 Photos",
            "images":[
                "https://s3-alpha-sig.figma.com/img/6a43/019d/8b5628c3c521ac9a5548d85f0cab780b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1tT7DJLJQLUvspOKBXzuGKGe4GFFJBG87aGDoIRf4DMiRjacfs3FLPEZ86fD4iumtQOzsOhKvaomBmA0KJAVO3nGBO2jbtly1PY-VJv78XnRgFM-QQjfJcXlGI4kgaUEWKNpFg4VXsiAmfunMt-f86QzJgHPKjCiyqz5NKskBbCoA23RKXtdeu9Oh6lYVDjGVii5Z~cGlcY4bQfhuQg7LxnloYoo8eYzMjqADf3n3Hd7rOQ0U8jwaqOO7x5YxXaw1D4M81T4IzYQB~g9iIurnn1vgqBx6TuV8bVuICxkAZOmJ~XCkpmKIsR4xY8MgAuSPeu8~-kX4I~ubLeND7whA__"
            ]
        },
        {
            "name":"Our Organization",
            "subtile":"4 Photos",
            "images":[
                "https://s3-alpha-sig.figma.com/img/f96c/0873/c54aeb90c3650b17e09212df6a2f3eee?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpEV9julrxvGzGeI4Y2fKaAQ9FgD6P8mwMkkKuyOjlMAOGedIMEoZXubBVJu7YlyRJ~uDUeeu~h9NYrmhU7x3F2SpfmnZn2MFD8iFI-LPRcNN51H1WncQXen~N9tSzpJd-EZSrZvwOzr0jeSjfUl~rq~w16Chv2aJan4TeDigHAiHbS8DmxNC-i1hTqLestl3GuQ4ppaeEKSfaUrs4jamssbUN8Fwf8lhGWwf0EX6fqopLqYs-SsOlA8asKFse0UtfDHLaPJQOuRyJol9uvbYVfo15xWYYIx2u0K-NghtkPm7pPPEXT5yXVBogepw~tj7G6NRl1t~4SCFCEYxJeS6g__"
            ]
        },
        {
            "name":"Japan 2014",
            "subtile":"6 Photos",
            "images":[
                "https://s3-alpha-sig.figma.com/img/a427/a3dc/0cc3498d7d530f3be8ecd868e4bd4f95?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjTRAzC1~ZHjIqmZYNPpQWt2wGljkFywg950-~Elw-c7UJBE5RGGfUqSjkVXz8gNX2STe0gRGSgStwpLjX6fa8~bp4hQ7HDL5pZLj3As2w5hcQY6zcK55QXZPyOJS0N4mQnUoTMwzanuhSlsjEtHxz6AWr59Crd8SpT1mCQl9jSGbA2kzfEJRegedeCGZj0aNgtVTePKaRd09iIQrluOhC9GyrI~cZJcRtHlknodkPjN3G~88jxfVrAT2hXbto6AUpZ~Na-uYlw-BjJ1rSTHcmsCe2tDfqb~3GTJQkkvLgItWR1sYXlLbZOF5Ns3cwrQFr9ucGdDB1Of6Ynq~BuTVw__"
            ]
        },
        {
            "name":"Australia Representative",
            "subtile":"6 Photos",
            "images":[
                "https://s3-alpha-sig.figma.com/img/a427/a3dc/0cc3498d7d530f3be8ecd868e4bd4f95?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjTRAzC1~ZHjIqmZYNPpQWt2wGljkFywg950-~Elw-c7UJBE5RGGfUqSjkVXz8gNX2STe0gRGSgStwpLjX6fa8~bp4hQ7HDL5pZLj3As2w5hcQY6zcK55QXZPyOJS0N4mQnUoTMwzanuhSlsjEtHxz6AWr59Crd8SpT1mCQl9jSGbA2kzfEJRegedeCGZj0aNgtVTePKaRd09iIQrluOhC9GyrI~cZJcRtHlknodkPjN3G~88jxfVrAT2hXbto6AUpZ~Na-uYlw-BjJ1rSTHcmsCe2tDfqb~3GTJQkkvLgItWR1sYXlLbZOF5Ns3cwrQFr9ucGdDB1Of6Ynq~BuTVw__"
            ]
        },
        {
            "name":"Business Promotion",
            "subtile":"12 Photos",
            "images":[
                "https://s3-alpha-sig.figma.com/img/1799/f8e0/81e984384c50e4385a07e7b6969e074c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HFokgM~NFr4nTLf-swdH-Ltw7wgY09dz~XoCsogmz0mv8x2kLouw8JTT8pSE7ZhiESS6cHZYpTmgFD-0UahbEGhcwZqx30JGaZY1ERQ-uMZAQBsk4n8P3CI9GyeBpon~KNzQlJWtvWM5Gs5W0Nx5dh0zYjrwvmbjVu6mle-i068qce139teB3keTEWc7dlRPVvEKwQ3mLPaiUuud~4gxrSYr3t6Me0aLCDajqkhfqnE8beWo8-U7Rtn199uXEUvx3pJS0zObW6Y0r3jnxLOzqMwLdQ7c~dZ0YCIk7kfzXgdCHhLEK7UeV13HM2wMsIPwndGILGSX5fXkq0OM~NTScg__"
            ]
        },
        {
            "name":"Canada Visit-May 2023",
            "subtile":"12 Photos",
            "images":[
                "https://s3-alpha-sig.figma.com/img/6a43/019d/8b5628c3c521ac9a5548d85f0cab780b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1tT7DJLJQLUvspOKBXzuGKGe4GFFJBG87aGDoIRf4DMiRjacfs3FLPEZ86fD4iumtQOzsOhKvaomBmA0KJAVO3nGBO2jbtly1PY-VJv78XnRgFM-QQjfJcXlGI4kgaUEWKNpFg4VXsiAmfunMt-f86QzJgHPKjCiyqz5NKskBbCoA23RKXtdeu9Oh6lYVDjGVii5Z~cGlcY4bQfhuQg7LxnloYoo8eYzMjqADf3n3Hd7rOQ0U8jwaqOO7x5YxXaw1D4M81T4IzYQB~g9iIurnn1vgqBx6TuV8bVuICxkAZOmJ~XCkpmKIsR4xY8MgAuSPeu8~-kX4I~ubLeND7whA__"
            ]
        },
    ];
   



  
  return (
    <main>
  <PageHeader
                link="/gallery"
                title="Gallery"
            />
            <section className='w-full flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12'>
<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full'>
{images.map((e,i)=>{
    return <div key={i} className='flex flex-col items-start w-full ' >
<img src={e.images[0]} alt="" className='lg:h-[384px] h-[500px] object-cover md:w-[288px] w-full rounded-md'/>
<p className='text-base font-bold text-secondary py-2'>{e.name}</p>
<p className='text-sm text-text'>{e.subtile}</p>
    </div>
})}
</div>
            </section>
           
    </main>
  )
}
