export interface Products {

  id: number,
  name: string,
  images: string[],
  price: number,
  rating: number,
  category: string,
  tags: string[],
  description: string

}

enum Category {
  console = 'Console',
  controller = 'Controller'
}

enum Tags {
  console = 'Console',
  controller = 'Controller',
  xbox = 'xbox',
  xboxS = 'Xbox S',
  xboxX = 'Xbox X',
  ps = 'PlayStation',
  ps5 = 'PlayStation 5',
  ps4 = 'PlayStation 4'
}

export class productsApi {

  public static products: Products[] = [

    {
      id: 1,
      name: 'XBOX Series S',
      images: ['https://pspro.ir/image/cache/catalog/XBOXSS/xbox-series-s-260x260.jpg', '', ''],
      price: 8760000,
      rating: 4.7,
      category: Category.console,
      tags: [
        Tags.xboxS,
        Tags.xbox
      ],
      description: 'هدف مایکروسافت برای نسل نهم کنسول‌ها این است که هر فردی بتواند بازی کند. قدم جدید مایکروسافت برای رسیدن به این هدف، کنسول ایکس باکس سری اس است که یک کنسول تمام دیجیتال با سخت‌افزار جدید و می‌تواند سرعت بارگذاری بیشتر، فریم ریت بالاتر و دنیاهای پویا و غنی را در کوچک‌ترین کنسول و به  ازای قیمت کمتری نسبت به سایر کنسول‌ها ارائه کند. ایکس باکس سری اس در کنار ایکس باکس سری ایکس، نسل نهم کنسول‌های بازی مایکروسافت خواهند بود.',
    },
    {
      id: 2,
      name: 'XBOX Series X',
      images: ['https://pspro.ir/image/cache/catalog/XBOX Series X/XBOXX/xbox-series-X-260x260.jpg', '', ''],
      price: 17450000,
      rating: 4.9,
      category: Category.console,
      tags: [
        Tags.xboxX,
        Tags.xbox
      ],
      description: 'نقطه عطف مایکروسافت در صنعت بازی‌های ویدیویی\n' +
        '\n' +
        'کنسول ایکس باکس سری ایکس، بدون شک بهترین ایکس باکسی است که می‌توانید بخرید و بازی‌های تمام نسل‌های ایکس باکس را روی آن تجربه کنید.\n' +
        '\n' +
        '\n' +
        '\n' +
        'از آن‌جایی که ایکس باکس سری ایکس بدون بازی انحصاری در زمان لانچ عرضه شده است، پشتیبانی این کنسول از بازی‌های قدیمی مزیت بزرگی است. با گذشت زمان و عرضه بازی‌های جدید که از قابلیت‌های این کنسول قدرتمند بهره می‌برند، آرشیو عظیمی از بازی‌های قدیمی و جدید را در اختیار خواهید داشت.',
    },
    {
      id: 3,
      name: 'PlayStation 5',
      images: ['https://pspro.ir/image/cache/catalog/PS5/ps5-standard-260x260.jpg', '', ''],
      price: 22480000,
      rating: 5,
      category: Category.console,
      tags: [
        Tags.ps,
        Tags.ps5
      ],
      description: 'هدف مایکروسافت برای نسل نهم کنسول‌ها این است که هر فردی بتواند بازی کند. قدم جدید مایکروسافت برای رسیدن به این هدف، کنسول ایکس باکس سری اس است که یک کنسول تمام دیجیتال با سخت‌افزار جدید و می‌تواند سرعت بارگذاری بیشتر، فریم ریت بالاتر و دنیاهای پویا و غنی را در کوچک‌ترین کنسول و به  ازای قیمت کمتری نسبت به سایر کنسول‌ها ارائه کند. ایکس باکس سری اس در کنار ایکس باکس سری ایکس، نسل نهم کنسول‌های بازی مایکروسافت خواهند بود.',
    },
    {
      id: 4,
      name: 'PlayStation 5 Digital Edition',
      images: ['https://pspro.ir/image/cache/catalog/PS5/ps5_alldigital-260x260.jpg', '', ''],
      price: 20990000,
      rating: 4.8,
      category: Category.console,
      tags: [
        Tags.ps,
        Tags.ps5
      ],
      description: 'پلی استیشن 5 نه تنها این انتظارات را برآورده می‌کند، بلکه باعث می‌شود تا این انتظارات بدیهی و ابتدایی به نظر برسند. با وجود پاندمی کوید-19، سونی توانسته تا کنسولی قدرتمند را به بازار عرضه کند که با بازی‌های انحصاری‌اش به راحتی ایکس باکس سری ایکس را به چالش می‌کشد.',
    },
    {
      id: 5,
      name: 'Nintendo Switch OLED Model with White Joy-Con',
      images: ['https://pspro.ir/image/cache/catalog/Nintendo_Switch/OLED/W/nintendo-switch-oled-model-white-joy-con-260x260.jpg', '', ''],
      price: 10990000,
      rating: 4.7,
      category: Category.console,
      tags: [
        Tags.xboxS,
        Tags.xbox
      ],
      description: 'نینتندو سوییچ نشان می‌دهد کهیک ایده خوب می‌تواند از گرافیک عالی و سرعت بالا سرگرم‌کننده‌تر باشد. کنسول نینتندوسوییچ به لطف آرشیو بزرگ بازی‌های نینتندو که همه سلایق را پوشش می‌دهد توانسته جایخود را در دل گیمرها و غیرگیمرها باز کند و به زودی تبدیل به پرفروش‌ترین کنسولنینتندو می‌شود.',
    },

  ]

}
