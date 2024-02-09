# DISBD 

DISBD, her türlü uygulamanın kullanabileceği ve kolayca entegre edilebileceği Node.js için basit, esnek ve çapraz platform bir veritabanı kütüphanesidir.

## Kurulum

En son Node.js sürümü gereklidir.

```npm install disbd```


## Kullanım

```
const db = require('disbd');
```

## Örnekler

```
- set(key, value): Belirtilen anahtar-değer çiftini veritabanına ekler (veya mevcut bir değeri günceller).

- get(key): Belirtilen anahtara karşılık gelen değeri veritabanından alır.

- delete(key): Belirtilen anahtarı ve ona karşılık gelen değeri veritabanından siler.

- push(key, value): Belirli bir anahtar için bir dizi değeri oluşturur ve yeni değerleri bu diziye ekler.

- unpush(key, value): Anahtardaki belirli bir değeri siler.

- has(key): Belirtilen anahtarın veritabanında olup olmadığını kontrol eder.

- deleteAll(): Tüm veritabanını sıfırlar.

- all(): Tüm veritabanını getirir.

- sortByProperty(property): Belirli bir özelliğe göre verileri sıralar.

- filterByDateRange(startDate, endDate): Belirli bir tarih aralığındaki verileri getirir.

- validateData(data): Veriyi geçerli bir formatta kontrol eder.

- increment(key, amount): Belirli bir değeri artırır.

- updateWithOperation(key, operation): Belirli bir değeri işlem sonucuna göre günceller.

- exportData(): Veritabanını dışa aktarır.

- incrementByPercentage(key, percentage): Belirli bir değeri yüzdeyle artırır.

- shuffleArray(key): Belirli bir diziyi karıştırır.

- confirmDeleteAll(): Tüm verileri silmeden önce onay alır.

- logChanges(action, key, value): Veri değişikliklerini günlüğe kaydeder.

- moveDataToNewKey(oldKey, newKey): Veriyi yeni bir anahtar altına taşır.

- generateRandomNumberInRange(min, max): Belirli bir aralıkta rastgele sayı üretir.

- groupByProperty(property): Belirli bir özelliğe göre verileri gruplar.

- sumPropertyValues(property): Belirli bir özelliğin değerlerini toplar.

- countItemsWithProperty(property, value): Belirli bir özellik değerine sahip verileri sayar.

- sumValuesInDateRange(startDate, endDate, property): Belirli bir tarih aralığındaki değerleri toplar.

- getUsersByProperty(property, value): Belirli bir özelliği kullanan kullanıcıları getirir.

- watchActiveUsers(): Aktif kullanıcıları izler.

- incrementValue(key, amount): Belirli bir anahtarın değerini artırır.

- decrementValue(key, amount): Belirli bir anahtarın değerini azaltır.

- multiplyValue(key, multiplier): Belirli bir anahtarın değerini belirli bir faktörle çarpar.

- incrementValueByPercentage(key, percentage): Belirli bir anahtarın değerini yüzdeyle artırır.

- divideValue(key, divisor): Belirli bir anahtarın değerini belirli bir bölenle böler.

- getDataFromDate(date): Belirli bir tarihten itibaren verileri getirir.

- calculateAverage(key): Belirli bir anahtar için ortalama değeri hesaplar.

- decreaseValue(key, amount): Belirli bir anahtarın değerini belirli bir miktarda azaltır.

- multiplyValue(key, factor): Belirli bir anahtarın değerini belirli bir faktörle çoğaltır.

- limitValueInRange(key, min, max): Belirli bir anahtarın değerini belirli bir aralıkta sınırlar.

- decreaseProperty(key, property, amount): Belirli bir özelliğin değerini belirli bir miktar azaltır.

- multiplyProperty(key, property, factor): Belirli bir özelliğin değerini belirli bir faktörle çoğaltır.

- limitPropertyInRange(key, property, min, max): Belirli bir özelliğin değerini belirli bir aralıkta sınırlar.

- setProperty(key, property, value): Belirli bir anahtarın belirli bir özelliğini günceller.

- searchValue(value): Veritabanında belirli bir değeri arar ve eşleşen anahtarları döndürür.

- filterData(conditionFn): Verileri belirli bir koşula göre filtreler ve koşulu sağlayanları döndürür.

- confirmDeleteData(key): Kullanıcıdan onay alarak belirli bir anahtarı ve ilişkili veriyi siler.

- setLastModified(key): Belirli bir anahtarın son değiştirilme tarihini günceller.

- addMultipleData(dataObject): Birden çok anahtar-değer çiftini aynı anda ekler.

- validateDataWithCriteria(data): Veriyi belirli bir kritere göre doğrular.

- addVersion(key, versionData): Belirli bir anahtara yeni bir sürümü ekler.

- copyData(sourceKey, destinationKey): Bir anahtarın değerini başka bir anahtara kopyalar.

- backupData(backupKey): Belirli bir anahtarın değerini yedekler.

- sumDataInCustomRanges(ranges): Belirli aralıklarda bulunan verilerin toplamını hesaplar.

- logChangesByDate(property): Tarihe göre verileri gruplar ve bir günlük olarak döndürür.

- exportToJSON(filePath): Verileri JSON formatında bir dosyaya dışa aktarır.

- importFromJSON(filePath): JSON formatındaki verileri bir dosyadan içe aktarır.

- countDataByProperty(property, value): Belirli bir özelliğe sahip ve belirli bir değeri içeren verilerin sayısını hesaplar.
```




## Database Değiştirme

<pre>
<code>
const Veritabanı = require('disbd'); // Veritabanı sınıfını projenize göre düzeltin

// Veritabanı nesnesini oluşturun (örnek veritabanı yolu)
const db = new Veritabanı('database.json');

db.set('key', 'value');
db.get('key');

</code>
</pre>

## Örnek Bot

https://github.com/DalgaGamePlay/DisBD-Test-Botu Linkinden Ulaşa Bilirsiniz!


## Discord Destek

https://discord.gg/B7PSPKpq Linkinden Bize Ulaşa Bilirsiniz!
